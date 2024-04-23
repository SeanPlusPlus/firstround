import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"

function HowTo() {
  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>How to play</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Hello there and welcome to <i>First Round</i>, the NFL Draft
          Prediction Game!!
        </p>
        <p>
          Here&apos;s how to play: as best as you can, predict the 2024 NFL
          Draft. The entries on this page are ordered according to the{" "}
          <a
            target="_blank"
            href="https://www.espn.com/nfl/draft/bestavailable/_/position/"
            rel="noreferrer"
          >
            ESPN 100 best college players list
          </a>
          .
        </p>
        <p>
          Update your submission by moving around the player names until you
          feel like you are ready. When you feel like your list is in good
          shape, scroll to the bottom of the page and click on{" "}
          <strong>Review and Submit</strong>. You will then be shown a
          confirmation modal; scroll down to the bottom of that, enter your name
          and then finally click <strong>Submit</strong>.
        </p>
        <p>
          Once the draft starts, here is how the scoring works: When a player is
          drafted, you will get a{" "}
          <strong>
            <code>0</code>
          </strong>{" "}
          if you predicted the exact spot where they were drafted.
        </p>
        <p>
          If the player is drafted in a position that is not what you predicted,
          you are penalized the square of the difference between where you
          thought they would go and where they actually went.
        </p>
        <p>
          For example: if you predict that{" "}
          <strong>
            <i>Malik Nabers</i>
          </strong>{" "}
          will go second overall in the draft, and he ends up going eighth
          overall in the draft, you will get a score of{" "}
          <strong>
            <code>36</code>
          </strong>{" "}
          for him:
        </p>
        <p>
          <strong>
            <code>(8 - 2) ^ 2 = 36</code>
          </strong>
        </p>
        <p>
          Here is another example: if you predict that{" "}
          <strong>
            <i>Taliese Fuaga</i>
          </strong>{" "}
          will go fifteenth overall in the draft, and he ends up going sixth
          overall in the draft, you will get a score of{" "}
          <strong>
            <code>81</code>
          </strong>{" "}
          for him:
        </p>
        <p>
          <strong>
            <code>(15 - 6) ^ 2 = 81</code>
          </strong>
        </p>
        <p>
          If you predict that a player will be drafted in the first round and
          they are not drafted in the first round, you will be scored for that
          player as if they were drafted{" "}
          <strong>
            <code>50th</code>
          </strong>{" "}
          overall.
        </p>
        <p>
          As such, there are two columns to keep an eye on during the draft: the{" "}
          <code>score</code> column shows what the current score is, however the{" "}
          <code>pending</code> column shows the number of players that have not
          yet been drafted on this entries&apos; list.
        </p>
        <p>
          Up until the very last pick, an entry may be leading with the lowest
          score, however at the conclusion of the first round, each athlete that
          was not accounted for will add{" "}
          <strong>
            <code>1024</code>
          </strong>{" "}
          points!!
        </p>
      </Modal.Body>
    </>
  )
}

export default HowTo
