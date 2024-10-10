import Image from "next/image";
import styles from "../../styles/page.module.css";
import homePageStyles from "../../styles/home-page.module.css";

//custom components
import Navigation from "../../components/Navigation";

//MUI components
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


export default function Home() {
  return (

    <>
      <Navigation />
      <section>
        <div className={homePageStyles.container}>
          <div>
            <h2>Hi Karen!</h2>
          </div>
          <div>
            <p>
              Click on some of these, I built them for you :)
            </p>
          </div>
        </div>
      </section>
      <section className={homePageStyles.funButtonsGrid}>
        <Stack>

          <div>
            <div>
              <Button>Click here if you love me</Button>
            </div>
          </div>



        </Stack>





        <div></div>
        <div></div>
        <div></div>
        <div></div>

      </section>





    </>



  );
}
