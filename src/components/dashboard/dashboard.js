import React from "react";

const Dashboard = () => {
  return (
    <div class="row">
      <div class="col s12 l6">
        <div class="card">
          <div class="card-image">
            <img src="../../img/flashcards.jpeg" alt="Flashcard" />
          </div>
          <div class="card-content">
            <span class="card-title">Flashcards</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
              sed, delestrum soluta! Repellendus sequi quas quam. Quod odio qui
              ipsam!
            </p>
          </div>
          <div class="card-action">
            <a href="#">Daily Challenge</a>
            <a href="#">Study</a>
            <a href="#">Manage Flashcards</a>
          </div>
        </div>
      </div>

      <div class="col s12 l6">
        <div class="card">
          <div class="card-image">
            <img src="../../img/challenges.png" alt="Challenges" />
          </div>
          <div class="card-content">
            <span class="card-title">Challenges</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
              sed, delectus, oluptates nostrum soluta! Repellendus sequi quas
              quam. Quod odio qui ipsam!
            </p>
          </div>
          <div class="card-action">
            <a href="#">Add a Challenge</a>
            <a href="#">View Challenges</a>
          </div>
        </div>
      </div>

      <div class="col s12 l6">
        <div class="card">
          <div class="card-image">
            <img src="../../img/rewards.png" alt="Rewards" />
          </div>
          <div class="card-content">
            <span class="card-title">Rewards</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
              sed, delectus,s voluptates nostrum soluta! Repellendus sequi quas
              quam. Quod odio qui ipsam!
            </p>
          </div>
          <div class="card-action">
            <a href="#">Add a Reward</a>
            <a href="#">View Rewards</a>
          </div>
        </div>
      </div>

      <div class="col s12 l6">
        <div class="card">
          <div class="card-image">
            <img src="../../img/statistics.png" alt="Statistics" />
          </div>
          <div class="card-content">
            <span class="card-title">Statistics</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
              sed, delectus, et voluptates nostrum soluta! Repellendus sequi
              quas quam. Quod odio qui ipsam!
            </p>
          </div>
          <div class="card-action">
            <a href="#">View Statistics</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
