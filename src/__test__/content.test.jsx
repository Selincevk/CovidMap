import configureStore from "redux-mock-store";
import { thunk } from "redux-thunk";
import { mockData } from "../utils/constants";
import Content from "../pages/detail/Content";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";

const mockStore = configureStore([thunk]);
test("store yükleme durumundayken ekrana loader gelir", () => {
  const store = mockStore({
    covid: { isLoading: true, error: null, data: null },
  });
  render(
    <Provider store={store}>
      <Content />
    </Provider>
    // browserRouter kullanmıyoruz çünkü yönlendirme yapmayı düşünmediğimiz için (örneğin: usePArams, useSearchParams,UseNavigate... )
  );
const loaders = screen.getAllByTestId("content-loader");
expect(loaders).toHaveLength(9); // Örneğin 9 tane loader olduğunu test et

});

test("store hata durumundayken ekrana error gelir ", () => {
  const store = mockStore({
    covid: { isLoading: false, error: "Bir Sorun Oluştu", data: null },
  });
  render(
    <Provider store={store}>
      <Content />
    </Provider>
  );
  screen.getByTestId("error");
});

test("store veri geldiğinde nesnedeki her bir değer için ekrana kart basılır ", () => {
  const store = mockStore({
    covid: { isLoading: false, error: null, data: mockData },
  });
  render(
    <Provider store={store}>
      <Content />
    </Provider>
  );
  //data nesnesini diziye çeviririz
 const arr =  Object.entries(mockData).filter(([key]) => key !== "flag")
 // dizideki her değer için kart içerisinde bilgiler basılır
  arr.forEach((item) => {
    // ekrana item'ın key değeri basılıyor mu?
    screen.getByText(item[0]);

    // ekrana item'ın value değeri basılıyor mu?
    screen.getByText(item[1]);
  });
});
