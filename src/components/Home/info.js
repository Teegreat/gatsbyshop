import React from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title"

export default function info() {
  return (
    <section className="py-3">
      <div className="container">
        <Title title="Our Story" />
        <div className="row">
          <div className=" col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatem perferendis veritatis ratione dignissimos corrupti,
              expedita dolorum hic tempora velit quod rerum ipsam suscipit!
              Odio, impedit neque ea maxime id incidunt quas esse voluptate.
              Perferendis doloribus unde nobis repudiandae placeat? Delectus,
              quam repellat minus doloribus et assumenda dolorum odit dolores
              debitis!
            </p>
            <Link to="/about/">
              <button className="btn text-uppercase btn-yellow">
                about page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
