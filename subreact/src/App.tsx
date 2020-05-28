import React, { Suspense, lazy } from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl';
import { HashRouter, Routes, Route } from 'react-router-dom';
import langFile from './locales';
// import routes, { SubRoutes } from './config/route';
import { observer } from 'mobx-react';

import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import styles from './global.less';
import { Loading } from '@/components/index';
import BasicLayout from '@/pages/layout/BasicLayout';

// import Welcome from '@/pages/Welcome';
// import ErrorPage from '@/pages/Authorized/403';

moment.locale('zhCN');

export type langType = 'zh-CN' | 'en-US';

const Welcome = lazy(async () => import('@/pages/Welcome'));
const ErrorPage = lazy(async () => import('@/pages/Authorized/403'));

const App: any = observer(({ store }) => {
  const { lang } = store;
  const localLang = localStorage.getItem('lang');
  return (
    <div className={styles.app}>
      <IntlProvider locale={lang} messages={langFile[localLang || lang]}>
        <HashRouter>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/sub-react/p3" element={<Welcome />} />
              <Route path="/sub-react/p4" element={<ErrorPage />} />
            </Routes>
          </Suspense>
        </HashRouter>
      </IntlProvider>
    </div>
  );
});

export default App;
