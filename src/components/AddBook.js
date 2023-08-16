import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function AddBook () {
    const navigate = useNavigate();
    const [formdata, setFormData] = useState({
        title: '',
        author: '',
        description: ''
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formdata,
            [e.target.name]: e.target.value,
        });
    };

    async function handleSubmit(e) {
        e.preventDefault();
        const id = formdata.title + "123";
        console.log(formdata)
        const resp = await axios.post('https://csis3380-final-server-0mhb.onrender.com/', {...formdata, ["id"]: id});
        console.log(resp.data);
        navigate("/", { replace: true });
    }


    return (
        <div className="CreateBook">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <br /><a className="btn btn-info float-left" href="/">Show BooK List</a>
          </div>
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Add Book</h1>
            <p className="lead text-center">Create new book</p>
            <form novalidate="" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Title of the Book"
                  name="title"
                  className="form-control"
                  value={formdata.title}
                  spellcheck="false"
                  data-ms-editor="true"
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Author"
                  name="author"
                  className="form-control"
                  value={formdata.author}
                  spellcheck="false"
                  data-ms-editor="true"
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Describe this book"
                  name="description"
                  className="form-control"
                  value={formdata.description}
                  spellcheck="false"
                  data-ms-editor="true"
                  onChange={handleInputChange}
                />
              </div>
              <input type="submit" className="btn btn-info btn-block mt-4" />
            </form>
          </div>
        </div>
      </div>
    </div>
    );
}

export default AddBook;
