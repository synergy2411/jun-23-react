import Card from "./Card";

export default function ErrorCard(props) {
  return (
    <Card title="Error Card" color="#ff8787">
      <p>Something went Wrong</p>
      {props.button}
    </Card>
  );
}
