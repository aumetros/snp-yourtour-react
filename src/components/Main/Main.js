import ChooseTour from "../ChooseTour/ChooseTour";
import CollectTour from "../CollectTour/CollectTour";
import Review from "../Review/Review";
import Gallery from "../Gallery/Gallery";

function Main() {
  return (
    <main className="main">
      <ChooseTour />
      <CollectTour />
      <Review />
      <Gallery />

    </main>
  )
}

export default Main;