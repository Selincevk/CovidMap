import Item from "../pages/home/item"
import {render,screen} from "@testing-library/react"

test('Gönderilen proplar doğru şekilde kullanılır', () => {
  // test edilecek bileşeni renderla
  render(<Item color="text-pink-500" text="Toplam Vaka" value="660,7"   />
  )
  // icon elementini al
const icon = screen.getByTestId("icon")

// color propu ile gelen değer iconun claasında var mı ? 
expect(icon).toHaveClass("text-pink-500")

 //? text içeriklerini kontrol ederken iki ihtimal ver

  //1) önce elementi çağır ardından textine bak
  const h2 = screen.getByText("660,7");
  expect(h2).toBeInTheDocument();

  //2) elementi textine göre çağır
  screen.getByText("Toplam Vaka");
})
