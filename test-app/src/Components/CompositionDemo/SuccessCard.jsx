import MyButton from "./Button";
import Card from "./Card";

export default function SuccessCard(props) {
  return (
    <Card title="Success Card" color="#a9e34b">
      <p>You are good to go!</p>
      {props.button}
    </Card>
  );
}
