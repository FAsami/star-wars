import React from "react";

function Film({ film }) {
  return (
    <div className="col-md-8 mx-auto mb-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{film.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            Director - {film.director} <br />
          </h6>
          <p>Released on - {new Date(film.releaseDate).toDateString()}</p>
          <p className="card-text">{film.openingCrawl}</p>
          <p>
            Producers - {film.producers.join(", ")}
            <br />
            Episode ID - {film.episodeId}
          </p>
          <p>
            <small>
              Last updated : {new Date(film.updatedAt).toDateString()}
            </small>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Film;
