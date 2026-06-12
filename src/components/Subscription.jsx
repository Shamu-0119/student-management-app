import './Subscription.css';

function Subscription(){
    return (
        <>

       <div className="sub-card container" id="contact">
            <div className="sub-content">
                <h3>Stay Updated With Student Activities</h3>
                <p> Get notifications about new courses, student updates, events, and academic announcements. </p>
            </div>

            <div className="sub-form">
                <form>
                    <input type="email" placeholder="Enter your email..." />
                    <button type="submit">Subscribe</button>
                </form>
            </div>
        </div>
        
        </>
    )
}

export default Subscription;