import React from 'react'

function Home()
{
    return(
        <div>
            <div className="add-to-card">
                <img src="https://img.freepik.com/premium-vector/add-card-icon-vector-isolated-white-background-eps-10_399089-1208.jpg" />
            </div>
            <h1>Home Component</h1>
            <div class="card-wrapper">
                <div class="img-wrapper item">
                    <img src="https://images.samsung.com/is/image/samsung/p6pim/in/sm-a146bdriins/gallery/in-galaxy-a14-5g-sm-a146-446757-sm-a146bdriins-thumb-534859418?$216_216_PNG$" />
                </div>
                <div class="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price:$1000.00
                    </span>
                </div>
                <div class="btn-wrapper item">
                    <button>Add to Card</button>
                </div>
            </div>
        </div>
    )
}
export default Home;