import MobileLayout from "components/layout/mobile-layout";
import BoxList from "components/ui/box/box-list";
import QuickButton from "components/ui/quick-button";

const Home = () => {
  return (
    <MobileLayout>
      {/* ALPHA */}
      {/* <SearchCardus /> */}
      <div className="mx-4 my-2">
        <BoxList />
      </div>
      <QuickButton />
    </MobileLayout>
  );
};

export default Home;
