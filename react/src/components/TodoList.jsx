export default function TodoList(props) {
  return (
    <ol>
      {props.list.map((item, index) => (
        <li key={index}>
          {item}
          <button type="button" onClick={() => props.onDelete(index)}>
            Remove
          </button>
        </li>
      ))}
    </ol>
  );
}
