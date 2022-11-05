import "./index.css"

const NewThisWeek = () => (
    <>
        <h1 className="mhead">New this week</h1>
        <div className="cards-container">
            <div className="card-con card-1">
                <div>
                    <p className="cpara">Collection</p>
                    <h1 className="chead">Most popular around the world</h1>
                </div>
                <button type="button" className="sa-btn">Show all</button>
            </div>

            <div className="card-con card-2">
                <div>
                    <p className="cpara">Collection</p>
                    <h1 className="chead">Great for team building</h1>
                </div>
                <button type="button" className="sa-btn">Show all</button>
            </div>

            <div className="card-con card-3">
                <div>
                    <p className="cpara">Collection</p>
                    <h1 className="chead">Fun for the family</h1>
                </div>
                <button type="button" className="sa-btn">Show all</button>
            </div>
        </div>
    </>
)

export default NewThisWeek