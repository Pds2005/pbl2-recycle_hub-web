document.addEventListener("DOMContentLoaded", function () {
    let rewardPoints = 0;
    const rewardDisplay = document.getElementById("rewardPoints");

    // Function to update reward points
    function updateRewards(points) {
        rewardPoints += points;
        rewardDisplay.textContent = rewardPoints;
    }

    // Function to handle reward redemption
    function redeemRewards() {
        if (rewardPoints > 0) {
            alert("You have successfully redeemed your rewards!");
            rewardPoints = 0;
            rewardDisplay.textContent = rewardPoints;
        } else {
            alert("You have no rewards to redeem.");
        }
    }

    // Function to handle donation
    function donateNow() {
        const donationAmount = prompt("Enter amount to donate for environmental sustainability:");
        if (donationAmount && !isNaN(donationAmount) && donationAmount > 0) {
            alert("Thank you for your donation of $" + donationAmount + "! Your contribution makes a difference.");
        } else {
            alert("Please enter a valid donation amount.");
        }
    }

    // Function to show recycling process images
    function showTransformation() {
        document.getElementById("transformation").style.display = "block";
    }

    // Event listeners for buttons
    document.querySelector("button[onclick='redeemRewards()']").addEventListener("click", redeemRewards);
    document.querySelector("button[onclick='donateNow()']").addEventListener("click", donateNow);
    document.querySelector("button[onclick='showTransformation()']").addEventListener("click", showTransformation);

    // Simulate reward points earning when file is uploaded
    document.getElementById("fileInput").addEventListener("change", function () {
        alert("Image uploaded successfully! You've earned 10 points.");
        updateRewards(10);
    });
});
