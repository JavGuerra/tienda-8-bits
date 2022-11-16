import Card from "./Card";

const Result = ({ filteredData }) => {
  return (
    <div id="cards">
      {filteredData.map(info => <Card key={info.code} info={info} /> )}
    </div>
  );
}

export default Result;