import { useSelector } from "react-redux";
import ContentLoader from "../../components/loader/ContentLoader";
import Error from "../../components/error";
import Card from "./Card";

const Content = ({ getData }) => {
  const { isLoading, data, error } = useSelector((state) => state.covid);

  // data nesnesini diziye çevir
  const arr = Object.entries(data || {}).filter(([key]) => key !== "flag"); //bayrağı alma

  return (
    <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {isLoading ? (
        <ContentLoader />
      ) : error ? (
        <Error info={error} refetch={getData} />
      ) : (
        arr.map((item, key) => <Card key={key} item={item} />)
      )}
    </div>
  );
};

export default Content;
