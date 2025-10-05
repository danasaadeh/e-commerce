import React from "react";
import {
  Box,
  Grid,
  useMediaQuery,
  useTheme as useMuiTheme,
} from "@mui/material";
import CenteredImageBox from "./centered-image-box";
import NewArrivalHeader from "./new-arrival-header";

// ✅ Import Images
import ps5Img from "@/assets/images/home/hero-sections/play_station.png";
import womanImg from "@/assets/images/home/hero-sections/woman_with_hat.jpg";
import speakersImg from "@/assets/images/home/hero-sections/microphone.png";
import perfumeImg from "@/assets/images/home/hero-sections/perfume.png";

const NewArrival: React.FC = () => {
  const muiTheme = useMuiTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        mt: 8,
        mb: 8,
        px: isMobile ? 2 : 8,
        py: 4,
        width: "100%",
        maxWidth: "1400px",
        mx: "auto",
      }}
    >
      {/* Header */}
      <NewArrivalHeader />

      {/* Layout Grid */}
      <Grid
        container
        spacing={3}
        justifyContent="center"
        alignItems="stretch"
        sx={{ mt: 2 }}
      >
        {/* LEFT SIDE — PS5 */}
        <Grid item xs={12} md={6}>
          <CenteredImageBox
            src={ps5Img}
            alt="PlayStation 5"
            title="PlayStation 5"
            subtitle="Black and White version of the PS5 coming out on sale."
            height={{ xs: 300, md: 600 }}
            shopLink="/shop/ps5"
          />
        </Grid>

        {/* RIGHT SIDE — 3 stacked blocks */}
        <Grid item xs={12} md={6}>
          <Grid container spacing={3} direction="column">
            {/* Woman */}
            <Grid item>
              <CenteredImageBox
                src={womanImg}
                alt="Women’s Collections"
                title="Women’s Collections"
                subtitle="Featured woman collections that give you another vibe."
                height={{ xs: 200, md: 290 }}
                shopLink="/shop/women"
              />
            </Grid>

            {/* Speakers + Perfume */}
            <Grid item>
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <CenteredImageBox
                    src={speakersImg}
                    alt="Speakers"
                    title="Speakers"
                    subtitle="Amazon wireless speakers"
                    height={{ xs: 180, md: 284 }}
                    shopLink="/shop/speakers"
                  />
                </Grid>
                <Grid item xs={6}>
                  <CenteredImageBox
                    src={perfumeImg}
                    alt="Perfume"
                    title="Perfume"
                    subtitle="GUCCI INTENSE OUD EDP"
                    height={{ xs: 180, md: 284 }}
                    isGlow
                    shopLink="/shop/perfume"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default NewArrival;
