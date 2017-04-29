import {
  SETTING_UPDATE
} from './types';


export const settingUpdate = ({prop, value}) => {
  return {
    type: SETTING_UPDATE,
    payload: {prop, value }
  };
};
