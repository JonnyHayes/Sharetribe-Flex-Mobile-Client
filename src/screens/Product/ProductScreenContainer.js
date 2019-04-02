import {
  compose,
  hoistStatics,
  withProps,
  withStateHandlers,
  lifecycle,
} from 'recompose';
import R from 'ramda';
import { Dimensions } from 'react-native';
import { inject } from 'mobx-react/native';
import ProductScreenView from './ProductScreenView';
import { withParamsToProps } from '../../utils/enhancers';
import IconAppLogo from '../../assets/png/icon-app-logo.png';

export default hoistStatics(
  compose(
    withParamsToProps('product'),
    inject((stores, { product }) => ({
      product,
      images: R.path(['relationships', 'getImages'], product).map(
        R.path(['variants', 'default', 'url']),
      ),


      author: R.path(['relationships', 'author'], product),
    })),
    withStateHandlers(
      {
        currentIndex: 0,
        tabIndex: 0,
      },
      {
        onChangeIndex: () => (index) => ({
          currentIndex: index,
        }),
        onChangeTabIndex: () => (index) => ({
          tabIndex: index,
        }),
      },
    ),
  ),
)(ProductScreenView);
