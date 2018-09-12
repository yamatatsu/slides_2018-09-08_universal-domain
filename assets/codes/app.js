import React from "react";
import { Provider } from "react-redux";
import { createStackNavigator } from "react-navigation";
import { createStore } from "app-core";
import navigationMiddleware from "./middlewares/navigation";
import RootNavigator from "./navigation";
import NavigationService from "./navigation-service";

const store = createStore(
  navigationMiddleware,
);

export default function App() {
  return (
    <Provider store={store}>
      <RootNavigator
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    </Provider>
  );
};
