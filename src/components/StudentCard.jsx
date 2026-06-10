import './StudentCard.css'

function StudentCard({name, age, course, city, onView}) {

    return (
        <div>
            <div className="card-shine"></div>
            
            <div className="card-content-wrap">
                
                <h3 className="student-name">{name}</h3>
                
                <div className="student-meta">
                    <div className="meta-item">
                        <span className="meta-icon">📅</span>
                        <span className="meta-text">{age} y/o</span>
                    </div>
                    <div className="meta-item">
                        <span className="meta-icon">📍</span>
                        <span className="meta-text">{city}</span>
                    </div>
                </div>

                <button className="card-action-btn" onClick={onView}>
                    <span>View Profile</span>
                    <svg className="arrow-icon" viewBox="0 0 24 24" width="16" height="16">
                        <path fill="none" d="M0 0h24v24H0z"/>
                        <path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"/>
                    </svg>
                </button>

                
            </div>
        </div>
    );
}

export default StudentCard;