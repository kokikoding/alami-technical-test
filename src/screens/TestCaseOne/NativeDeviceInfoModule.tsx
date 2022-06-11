import {NativeModules} from 'react-native';
const {DeviceInfoModule} = NativeModules;
interface DeviceInfoInterface {
  getDeviceID(arg0?: any): string;
}
export default DeviceInfoModule as DeviceInfoInterface;
