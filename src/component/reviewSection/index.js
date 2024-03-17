import React from 'react'
import dashboardStyles from "../../styles/dashboard.module.css"

function ReviewSection(props) {
    const { review,reviewer,bookId,reviewDate } = props;

    return (
        <div className={dashboardStyles.eachReviewSection}>
            
            <h4 className={dashboardStyles.reviewerName}>{reviewer} on {`${reviewDate.split("T")[0]}`}</h4>
            <div className={dashboardStyles.reviewStyles}>
                {review}
            </div>
        </div>
    )
}

export default ReviewSection
