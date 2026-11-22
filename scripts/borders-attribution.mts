export const SOURCE_REPO = "https://github.com/Seshat-Global-History-Databank/cliopatria";
export const SOURCE_ZIP = "https://raw.githubusercontent.com/Seshat-Global-History-Databank/cliopatria/main/cliopatria.geojson.zip";
export const LICENSE = "CC BY 4.0";
export const LICENSE_URL = "https://creativecommons.org/licenses/by/4.0/";
export const PAPER_DOI = "https://doi.org/10.1038/s41597-025-04516-9";
export const DATASET_DOI = "https://doi.org/10.5281/zenodo.13363121";

export const ATTRIBUTION =
  "Historical borders: Cliopatria, Seshat Global History Databank (Bennett et al. 2025, Scientific Data 12, 247, doi:10.1038/s41597-025-04516-9), CC BY 4.0. Simplified, quantized and split into century bins by Chronos.";

const CITATION =
  "Bennett, J. S., Mutch, E., Tollefson, A., Chalstrey, E., Benam, M., Cioni, E., Reddish, J., Zsambok, J., Levine, J., Cook, C. J., Francois, P., Hoyer, D. & Turchin, P. (2025). Cliopatria - A geospatial database of world-wide political entities from 3400BCE to 2024CE. *Scientific Data* 12, 247.";

export function attributionMarkdown(datasetName: string): string {
  return `# Historical border data

The polity borders in this directory are derived from **Cliopatria**, a geospatial dataset of world-wide political entities from 3400 BCE to 2024 CE, part of the [Seshat Global History Databank](https://seshatdatabank.info/).

- Source: ${SOURCE_REPO} (file \`${datasetName}\`)
- Dataset DOI: ${DATASET_DOI}
- License: [Creative Commons Attribution 4.0 International (CC BY 4.0)](${LICENSE_URL})

## Citation

${CITATION} ${PAPER_DOI}

## Changes made

These files are an adapted, reduced version of the original data. They were produced by \`scripts/build-borders.mts\`, which:

- keeps only records of type \`POLITY\`, omitting the \`RELATION\` overlays (alliances, vassalage, personal unions) and the composite entities whose territory is already covered by their component polities (names in parentheses, e.g. "(British Empire)");
- keeps only the \`Name\`, \`FromYear\`, \`ToYear\` and \`Area\` attributes (renamed \`name\`, \`from\`, \`to\`, \`area\`) and merges consecutive records of the same polity whose geometry is identical;
- splits the records into 100-year bins (bin \`1200\` covers 1200-1299; a record appears in every bin its year range overlaps);
- removes polities smaller than 2,000 km² (unless a bin would otherwise be empty) and drops islands and exclaves smaller than about 300 km²;
- rewinds polygon rings to the clockwise convention used by d3-geo, simplifies the geometry (Visvalingam, spherical area) with a tolerance chosen per bin to limit file size, converts each bin to TopoJSON and quantizes coordinates to a 10,000 × 10,000 grid.

Shapes are therefore approximate and unsuitable for measurement. Border uncertainties, as well as differing opinions on the names, territorial changes and durations of polities, are inherent to historical maps; see the Cliopatria README for details. Neither the Seshat Global History Databank nor the Cliopatria authors endorse Chronos.
`;
}
