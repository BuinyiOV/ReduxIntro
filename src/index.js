import React from 'react';
import ReactDOM from 'react-dom/client';
import {legacy_createStore as createStore} from 'redux'
import reducer from './reducer';
import { Provider } from 'react-redux';
//Provider зв'язує ввесь стор з усім UI, тобто в будь якому дереві можна звернутись до стор за допомогою диспетч

import App from './components/App';

const store = createStore(reducer);

	const root = ReactDOM.createRoot(document.getElementById('root'));
		root.render(
			<React.StrictMode>
					<Provider store={store}>
						<App />
					</Provider>
			</React.StrictMode>
		);
