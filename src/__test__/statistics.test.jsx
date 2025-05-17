const { render,screen,waitFor} = require("@testing-library/react")
import Statistics from "../pages/home/Statistics"
import { totalApi } from "../utils/api"
import { totalData } from "../utils/constants"
import millify from "millify"



// Api isteğini atan fonksiyonu mockla
jest.mock("../utils/api", () => ({
  totalApi: { get: jest.fn() },
}));

describe("statisticts component testleri",() => {
  // ! HER TESTİN SONRASINDA MOCKLARI TEMİZLE
  afterEach(() => {
    jest.clearAllMocks()
  })
  test('Bileşen renderlandığında ekrana loader gelir', () => {
// ! sahte get fonk.çalıştığında promise döndürsün 
totalApi.get.mockReturnValue(new Promise(() => {}))
  render(<Statistics/>)
  screen.getByTestId("loader")
})


test('Apiden hata gelirse ekrana hata mesajı gelir', async () => {
  //! sahte get fonk.çalıştığında hata döndürsün
  totalApi.get.mockRejectedValue(new Error (" Üzgünüz Bir Sorun Oluştu"))
  render (<Statistics/>)

  // belirli bir sürenin ardından ekranda hata mesajı vardır
 await waitFor(() => screen.getByText("Üzgünüz Bir Sorun Oluştu"));
})


test('Apiden veri gelirse ekrana veriler gelir', async () => {
  //! sahte get fonk. çalıştığında total veriyi döndürsün
  totalApi.get.mockResolvedValue({ data: { data: totalData } });

    // bileşeni renderla
    render(<Statistics />);

     // api isteğinin atılmasını bekle
    await waitFor(() => expect(totalApi.get).toHaveBeenCalled());

    // topla vaka sayısı ekrana basılır
    screen.getByText(millify(totalData.confirmed));

    // topla vefat sayısı ekrana basılır
    screen.getByText(millify(totalData.deaths));

    // aktif vaka sayısı ekrana basılır
    screen.getByText(millify(totalData.active));

})
})
