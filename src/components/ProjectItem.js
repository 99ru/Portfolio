function ProjectItem({
  title,
  img,
  desc,
  toolUsed1,
  toolUsed2,
  code,
  demo,
}) {
  return (
    <>
      <div className="pro pro__1">
        <div className="pro__img">
          <a target="_blank" href={demo} rel="noreferrer">
            <img src={img} alt={title} />
          </a>
        </div>
        <div className="pro__text">
          <h3>{title}</h3>
          <p>{desc}</p>
          <div className="stack">
            <p>{toolUsed1}</p>
            <p>{toolUsed2}</p>
          </div>
          <div className="links">
            <a target="_blank" href={code} rel="noreferrer">
              Code <i className="fa-brands fa-github"></i>
            </a>
            {demo && (
              <a target="_blank" href={demo} rel="noreferrer">
                Live Demo
                <i className="fa-solid fa-arrow-up-right-from-square link-icon"></i>
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectItem;
