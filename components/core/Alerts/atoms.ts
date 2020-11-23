import { atom, RecoilState } from 'recoil';

export interface AlertState {
  open: boolean;
  primary: string;
  secondary: string;
  type: string;
  timeout: number;
}

export const alertState: RecoilState<AlertState> = atom({
  key: 'alertState',
  default: {
    open: false,
    primary: '',
    secondary: '',
    type: 'info',
    timeout: 5000,
  },
});
