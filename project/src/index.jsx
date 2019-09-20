import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <HashRouter>
                <Component />
            </HashRouter>
        </AppContainer>,
        document.getElementById('react-app-root')
    );
};

render(App);
/*eslint-disable */
if (module.hot) {
    module.hot.accept('./components/App', () => {
        render(App);
    });
}
/*eslint-enable */