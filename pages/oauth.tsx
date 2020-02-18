import { ReactElement, FunctionComponent } from 'react';
import Router from 'next/router';
import { inject, observer } from 'mobx-react';

import Preloader from './../src/images/svg/preloader.svg';

import { URLS } from '../src/components/Routes';
import { STORE_IDS } from '../src/stores';
import { isBrowser } from '../src/utils';

const OAuth: FunctionComponent = inject(STORE_IDS.AUTH)(
  observer(
    (props: any): ReactElement => {
      let { auth, router } = props;

      auth.saveToken = router.query.code;

      if (isBrowser) {
        Router.push(URLS.HOME);
      }

      return <Preloader />;
    }
  )
);

export default OAuth;
