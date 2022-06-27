function Slide(props) {
  // console.log(props)
  return (
    
    <div className="slide-container" data-testid="slide">
      <h3 data-testid="title">{props.title}</h3>
      <p data-testid="description">{props.desc}</p>
    </div>
  );
}

export default Slide;
