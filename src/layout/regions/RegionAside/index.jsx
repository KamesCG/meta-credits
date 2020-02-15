/* --- Global --- */
// import menuDev from 'data/menu-prd';
// import menuPrd from 'data/menu-prd';

/* --- Component --- */
const RegionAside = ({ sx, ...props }) => {
  return (
    <Atom.Flex column gradient="blueDeep" direction={180} sx={sx}>
      <Atom.Flex column>
        <Atom.Flex
          center
          column
          gradient="blueDark"
          sx={{ bg: "#172692", px: [3, 3, 3], py: 4 }}
        >
          <Molecule.Link to="/">
            <Atom.Heading lg heavy sx={{ mb: 0 }}>
              MetaCredits
            </Atom.Heading>
          </Molecule.Link>
        </Atom.Flex>

        <Atom.HorizontalRule
          sx={{
            width: "100%"
          }}
        />
      </Atom.Flex>

      <Atom.Box sx={{ p: [3, 3, 4] }}>
        <Molecule.Menu
          expanded
          items={[]}
          direction="column"
          sx={{
            fontSize: 2,
            my: 1,
            flexDirection: "column"
          }}
          sxChildren={{
            fontSize: 1,
            my: 1,
            flexDirection: "column"
          }}
        />
        <Molecule.Menu
          expanded
          direction="column"
          sx={{
            fontSize: 2,
            my: 1,
            flexDirection: "column"
          }}
          sxChildren={{
            fontSize: 1,
            my: 1,
            flexDirection: "column"
          }}
          items={[
            {
              label: "Dashboard",
              to: "/dashboard"
            },
            {
              label: "Proposals",
              to: "/dashboard/proposals"
            },
            {
              label: "Usage",
              to: "/dashboard/Usage"
            },
            {
              label: "Settings",
              to: "/dashboard/settings"
            }
          ]}
        />
      </Atom.Box>
    </Atom.Flex>
  );
};

export default RegionAside;
