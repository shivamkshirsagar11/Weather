import React from 'react'

export default function WeatherInfo() {
  return (
    <>
<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Launch static backdrop modal
</button>
<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nisi asperiores fuga aliquam! Amet ducimus libero vitae beatae distinctio. Non, vero at magni ipsum tempora aspernatur, explicabo facere praesentium fugiat, voluptates est beatae. Debitis nulla exercitationem facere sequi necessitatibus inventore pariatur architecto vero consequatur enim rerum soluta tempora sint suscipit eligendi voluptas, ratione molestiae atque nostrum aut temporibus assumenda veniam error quibusdam! Hic, nostrum sit, quam praesentium eaque quae facere distinctio necessitatibus iusto debitis dolorem. Voluptate debitis ipsum nisi nam asperiores quas dolor iusto possimus ratione mollitia similique, placeat nesciunt. Esse labore iure vel veritatis enim neque quaerat dolorum nulla!
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Understood</button>
      </div>
    </div>
  </div>
</div>
    </>
  )
}
