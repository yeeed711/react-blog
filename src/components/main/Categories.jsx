import "./categories.css";

function Categories({ category }) {
  return (
    <ul class="categories">
      {category.map((item, index) => (
        <li key={index}>
          <a href="#none">{item}</a>
        </li>
      ))}
    </ul>
  );
}

export default Categories;
