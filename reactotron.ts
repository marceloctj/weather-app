import Reactotron, {
  networking,
  ReactotronReactNative,
} from 'reactotron-react-native';

import type { Reactotron as ReactotronType } from 'reactotron-core-client';
import { reactotronRedux } from 'reactotron-redux';

declare global {
  interface Console {
    tron: ReactotronType<ReactotronReactNative> & ReactotronReactNative;
  }
}

const reactotron = Reactotron.configure()
  .useReactNative()
  .use(networking())
  .use(reactotronRedux())
  .connect();

reactotron.clear();

console.tron = reactotron;
