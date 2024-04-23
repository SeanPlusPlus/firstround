import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"

function HowTo() {
  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>How to Play</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Hello there and welcome to <i>First Round</i>, the NFL Draft
          Prediction Game!!
        </p>
        <p>
          Here&apos;s how to play: as best as you can, predict the first round
          of the 2024 NFL Draft. The entries on this page are roughly ordered
          according to the{" "}
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
          feel like you are ready. You are only picking the first round, so no
          need to order any names after <strong>#32</strong> here. When you feel
          like your list is in good shape, scroll to the bottom of the page and
          click on <strong>Review and Submit</strong>. You will then be shown a
          confirmation modal ... scroll down to the bottom of that, enter your
          name, and then finally click <strong>Submit</strong>.
        </p>
        <p>
          Once the draft starts, here is how the scoring works: When a player is
          drafted, you will get a{" "}
          <strong>
            <code>0</code>
          </strong>{" "}
          if you predicted the exact spot where they were drafted. (This is
          ideal)
        </p>
        <p>
          If the player is drafted in a position that is not what you predicted
          (less than ideal), you are penalized the square of the difference
          between where you thought they would go and where they actually went.
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
          If you predict that a particular athlete will be drafted in the first
          round, and they are not drafted in the first round, you will be scored
          for that athlete as if they were drafted{" "}
          <strong>
            <code>64th</code>
          </strong>{" "}
          overall -- the last pick in the second round (very much not ideal).
        </p>
        <p>
          For example: let&apos;s say you predicted that <strong>Bo Nix</strong>{" "}
          would be selected tenth overall in the draft. But, at the end of the
          first round he was not drafted at all! During the draft, he would be{" "}
          <i>pending</i> and there would be no positive score next to his name
          for your entry, but at the end of the draft, he would be scored{" "}
          <strong>
            <code>2916</code>
          </strong>
          .
        </p>
        <p>
          <strong>
            <code>(64 - 10) ^ 2 = 2916</code>
          </strong>
        </p>
        <p>
          Thus, there are two columns on the main scoreboard to keep an eye on
          during the draft: the <code>score</code> column shows what the current
          score is for an entry, and the <code>pending</code> column shows the
          number of players that have not yet been drafted on that particular
          entries&apos; list.
        </p>
        <p>
          Up until the very last pick of the first round, an entry may be
          leading with the lowest score, however at the conclusion of the first
          round of the draft, each athlete that was not accounted for will then
          need to be given their penalized score.
        </p>
        <p>
          As such, you are very much incentivized to draft players you think
          will go in the first round. (But let us not forget, fortune favors the
          brave, and you will have to do at least <i>something</i> to separate
          your entry from the pack!)
        </p>
        <p>
          Also, just to reiterate, this game concludes at the end of the first
          round. After the 32nd pick is made on Thursday night, the final
          scoring penalty pass will occur, and a winner will be crowned!
        </p>
        <p>
          Once the draft starts Thursday evening you can simply leave your
          browser open on the <a href="/entries">Entries Dashboard</a> and the
          scores + the picks will be updated in real-time!
        </p>
        <p>
          If you&apos;ve made it this far you might be wondering why the heck
          would I spend so much time building a game like this. Honestly ...
          That&apos;s a great question, and sometimes, I&apos;m not even sure of
          the answer myself ...
        </p>
        <p>
          It seems like every year I rebuild this thing just to get my hands on
          a new tech stack and to mess around with scoring variations. This
          year, I&apos;ve been wanting to learn how to integrate Postgres on
          Vercel, so I figured why not rebuild the draft game there and update
          the scoring algorithm a bit from year&apos;s past. If you want to
          check out the implementation, head on over{" "}
          <a
            href="https://github.com/SeanPlusPlus/firstround"
            target="_blank"
            rel="noreferrer"
          >
            to the GitHub
          </a>{" "}
          repo, let me know what you think, and hook it up with a{" "}
          <span role="img" aria-label="hand waving">
            ⭐
          </span>{" "}
          while you&apos;re there!
        </p>
      </Modal.Body>
    </>
  )
}

export default HowTo
