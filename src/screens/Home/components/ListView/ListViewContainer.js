import { compose, withHandlers } from 'recompose';
import { inject } from 'mobx-react';
import ListView from './ListView';
import { getCategoriesContext } from '../../../../utils/enhancers/withCategoriesHocs';
import { NavigationService } from '../../../../services';

export default compose(
  inject(({ listings }) => ({
    listings: listings.list.asArray,
    isLoading: listings.fetchListings.inProgress,
    isSearching: listings.searchListings.inProgress,
    searchListings: listings.searchList.asArray,
  })),

  withHandlers({
    goToProduct: () => (product) =>
      NavigationService.navigateToProduct({ product }),
  }),

  getCategoriesContext,
)(ListView);
