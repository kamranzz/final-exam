import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Swal from "sweetalert2";
import "./productCard.css";

const ProductCard = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:8080/products");
        const productsData = response.data;
        setProducts(productsData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (productId) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You will not be able to recover this product!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Delete",
        cancelButtonText: "Cancel",
        confirmButtonColor: "#dc3545",
        cancelButtonColor: "#6c757d",
      });

      if (result.isConfirmed) {
        await axios.delete(`http://localhost:8080/products/${productId}`);
        setProducts(products.filter((product) => product._id !== productId));
        Swal.fire("Deleted!", "The product has been deleted.", "success");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddToWishlist = (product) => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    if (!wishlist.find((item) => item._id === product._id)) {
      wishlist.push(product);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }
    navigate("/wishlist");
  };

  return (
    <section className="offer-area section-gap" id="offer">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="menu-content col-lg-8">
            <div className="title text-center">
              <h1 className="mb-3">Recent Podcasts</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="search-bar">
              <input
                type="text"
                className="mb-5 mt-4 form-control"
                placeholder="Search by title"
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
          </div>
        </div>
        <div className="row">
          {filteredProducts.map((product) => (
            <div key={product._id} className="col-lg-12">
              <Card className="single-offer mt-4 mb-5">
                <div>
                  <Card.Img
                    className="image-back"
                    variant="top"
                    src={product.imageURL}
                    alt={product.title}
                  />
                </div>

                <div className="card-body">
                  <Card.Body>
                    <Card.Title className="text-danger">
                      {product.title}
                    </Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                    <div className="music-bar justify-content-center align-items-center">
                      <div className="d-flex">
                        <div>
                          <i class="fa-solid fa-play"></i>
                        </div>
                        <div>
                          <p>00:00</p>
                        </div>
                      </div>
                      <div className="line-body-card"></div>
                      <div className="d-flex">
                        <div>
                          <p>00:00</p>
                        </div>
                        <div>
                        <i class="fa-solid fa-volume-xmark"></i>
                        </div>
                      </div>
                    </div>
                    <Button
                      className="mx-2"
                      variant="primary"
                      onClick={() => handleAddToWishlist(product)}
                    >
                      Add to Wishlist
                    </Button>
                    <Button
                      className="mx-2"
                      variant="danger"
                      onClick={() => handleDelete(product._id)}
                    >
                      Delete
                    </Button>
                  </Card.Body>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
