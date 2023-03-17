import "./style.css";
function NotFound() {
  return (
    <div>
      <div className={"error"}>404</div>
      <span className={"info"}>Página no encontrada</span>
      <img
        src="http://images2.layoutsparks.com/1/160030/too-much-tv-static.gif"
        className="static"
      />
    </div>
  );
}
export default NotFound;
