import React, { useEffect } from 'react';
import InfoIcon from './Icons/Info';
import ErrorIcon from './Icons/Error';
import WarningIcon from './Icons/Warning';
import CloseIcon from './Icons/Close';
import { Transition } from '@headlessui/react';
import { alertState, AlertState } from './atoms';
import { useRecoilState } from 'recoil';

interface AlertProps {
  type?: string;
  icon?: React.ReactNode;
  primary: string;
  secondary?: string;
  onClose?: Function;
}

function Alert(props: AlertProps) {
  const { type, icon, primary, secondary, onClose } = props;
  return (
    <div
      className={`relative border-t-4 rounded-b px-4 py-3 shadow-md my-2 alert-${type}`}
      role="alert"
    >
      <div className="absolute top-0 right-0 p-2">
        <div className="cursor-pointer" title="Close" onClick={() => onClose()}>
          <CloseIcon />
        </div>
      </div>
      <div className="flex items-center">
        <div className="p-2 pr-4">{icon}</div>
        <div>
          <p className="font-bold">{primary}</p>
          <p className="text-sm">{secondary}</p>
        </div>
      </div>
    </div>
  );
}

function InfoAlert(props: AlertProps) {
  return <Alert {...props} type="info" icon={<InfoIcon />} />;
}

function ErrorAlert(props: AlertProps) {
  return <Alert {...props} type="error" icon={<ErrorIcon />} />;
}

function WarningAlert(props: AlertProps) {
  return <Alert {...props} type="warning" icon={<WarningIcon />} />;
}

export function useAlert() {
  const [alert, setAlert] = useRecoilState<AlertState>(alertState);
  const showAlert = (props) => {
    setAlert({
      ...alert,
      ...props,
    });
  };
  useEffect(() => {
    if (alert?.open && alert?.timeout) {
      setTimeout(() => {
        showAlert({
          open: false,
        });
      }, alert?.timeout);
    }
  }, [alert?.open, alert?.timeout]);
  return { alert, showAlert };
}

export default function Alerts() {
  const { alert, showAlert } = useAlert();
  const onClose = () => {
    showAlert({
      open: false,
    });
  };
  return (
    <Transition
      show={alert.open}
      enter="transition ease-out duration-500"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-500"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
      className="fixed inset-x-0 top-0 w-2/3 md:w-1/3 mx-auto z-50"
    >
      {alert.type === 'info' && (
        <InfoAlert
          primary={alert.primary}
          secondary={alert.secondary}
          onClose={() => onClose()}
        />
      )}
      {alert.type === 'error' && (
        <ErrorAlert
          primary={alert.primary}
          secondary={alert.secondary}
          onClose={() => onClose()}
        />
      )}
      {alert.type === 'warning' && (
        <WarningAlert
          primary={alert.primary}
          secondary={alert.secondary}
          onClose={() => onClose()}
        />
      )}
    </Transition>
  );
}
