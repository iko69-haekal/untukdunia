import React, { useState } from "react";
import Admin from "../../../components/admin";

const Tambah = () => {
  const [title, setTitle] = useState("");
  const [sub, setSub] = useState("");
  return (
    <>
      <Admin>
        <div className="container pb-5">
          <div class="form-group">
            <label>title</label>
            <input
              type="text"
              class="form-control"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div class="form-group">
            <label>deskripsi singkat</label>
            <textarea
              type="text"
              class="form-control"
              value={sub}
              onChange={(e) => {
                setSub(e.target.value);
              }}
            ></textarea>
          </div>

          <button className="btn btn-primary mt-3">submit</button>
        </div>
      </Admin>
    </>
  );
};

export default Tambah;
