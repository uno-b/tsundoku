import React from "react";
import flashcardPic from "../../img/flashcards.png";
import challengesPic from "../../img/challenges.png";
import rewardsPic from "../../img/rewards.png";
import statisticsPic from "../../img/statistics.png";

const Dashboard = () => {
  return (
    <div className="container">
      <div class="row">
        <div class="col s12 l6">
          <div class="card">
            <div class="card-image">
              <img src={flashcardPic} alt="Flashcard" />
              <a href="#" class="halfway-fab btn-floating orange">
                <i class="material-icons">notes</i>
              </a>
            </div>

            <div class="card-content">
              <span class="card-title">Flashcards</span>
              <p>Review the flashcards you have created.</p>
            </div>
            <div class="card-action">
              <a href="#">Daily Challenge</a>
              <span> | </span>
              <a href="#">Manage</a>
            </div>
          </div>
        </div>

        <div class="col s12 l6">
          <div class="card">
            <div class="card-image">
              <img src={challengesPic} alt="Challenges" />
              <a href="#" class="halfway-fab btn-floating orange">
                <i class="material-icons">notes</i>
              </a>
            </div>

            <div class="card-content">
              <span class="card-title">Challenges</span>
              <p>Complete challenges to earn points.</p>
            </div>
            <div class="card-action">
              <a href="#">Add a Challenge</a>
              <span> | </span>
              <a href="#">View</a>
            </div>
          </div>
        </div>

        <div class="col s12 l6">
          <div class="card">
            <div class="card-image">
              <img src={rewardsPic} alt="Rewards" />
              <a href="#" class="halfway-fab btn-floating orange">
                <i class="material-icons">notes</i>
              </a>
            </div>

            <div class="card-content">
              <span class="card-title">Rewards</span>
              <p>Earn your rewards with your points.</p>
            </div>
            <div class="card-action">
              <a href="#">Add a Reward</a>
              <span> | </span>
              <a href="#">View</a>
            </div>
          </div>
        </div>

        <div class="col s12 l6">
          <div class="card">
            <div class="card-image">
              <img src={statisticsPic} alt="Statistics" />
              <a href="#" class="halfway-fab btn-floating orange">
                <i class="material-icons">notes</i>
              </a>
            </div>

            <div class="card-content">
              <span class="card-title">Statistics</span>
              <p>See your current progress.</p>
            </div>
            <div class="card-action">
              <a href="#">View</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
