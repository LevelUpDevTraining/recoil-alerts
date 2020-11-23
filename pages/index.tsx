import { useAlert } from '../components/core/Alerts';

function InfoButton() {
  const { showAlert } = useAlert();
  const onClick = (type: string) => {
    showAlert({
      open: true,
      primary: 'Message',
      secondary: 'This is the message for the alert',
      type,
    });
  };
  return (
    <button className="btn-info" onClick={() => onClick('info')}>
      Info Alert
    </button>
  );
}

function ErrorButton() {
  const { showAlert } = useAlert();
  const onClick = (type: string) => {
    showAlert({
      open: true,
      primary: 'Message',
      secondary: 'This is the message for the alert',
      type,
    });
  };
  return (
    <button className="btn-error" onClick={() => onClick('error')}>
      Error Alert
    </button>
  );
}

function WarningButton() {
  const { showAlert } = useAlert();
  const onClick = (type: string) => {
    showAlert({
      open: true,
      primary: 'Message',
      secondary: 'This is the message for the alert',
      type,
    });
  };
  return (
    <button className="btn-warning" onClick={() => onClick('warning')}>
      Warning Alert
    </button>
  );
}

export default function Home() {
  return (
    <div className="screen">
      <div className="paper">
        <div className="h1">Recoil Alerts</div>
        <div className="flex gap-2">
          <InfoButton />
          <ErrorButton />
          <WarningButton />
        </div>
      </div>
    </div>
  );
}
