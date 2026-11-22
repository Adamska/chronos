# Historical border data

The polity borders in this directory are derived from **Cliopatria**, a geospatial dataset of world-wide political entities from 3400 BCE to 2024 CE, part of the [Seshat Global History Databank](https://seshatdatabank.info/).

- Source: https://github.com/Seshat-Global-History-Databank/cliopatria (file `cliopatria_polities_only_v021.geojson`)
- Dataset DOI: https://doi.org/10.5281/zenodo.13363121
- License: [Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/)

## Citation

Bennett, J. S., Mutch, E., Tollefson, A., Chalstrey, E., Benam, M., Cioni, E., Reddish, J., Zsambok, J., Levine, J., Cook, C. J., Francois, P., Hoyer, D. & Turchin, P. (2025). Cliopatria - A geospatial database of world-wide political entities from 3400BCE to 2024CE. *Scientific Data* 12, 247. https://doi.org/10.1038/s41597-025-04516-9

## Changes made

These files are an adapted, reduced version of the original data. They were produced by `scripts/build-borders.mts`, which:

- keeps only records of type `POLITY`, omitting the `RELATION` overlays (alliances, vassalage, personal unions) and the composite entities whose territory is already covered by their component polities (names in parentheses, e.g. "(British Empire)");
- keeps only the `Name`, `FromYear`, `ToYear` and `Area` attributes (renamed `name`, `from`, `to`, `area`) and merges consecutive records of the same polity whose geometry is identical;
- splits the records into 100-year bins (bin `1200` covers 1200-1299; a record appears in every bin its year range overlaps);
- removes polities smaller than 2,000 km² (unless a bin would otherwise be empty) and drops islands and exclaves smaller than about 300 km²;
- rewinds polygon rings to the clockwise convention used by d3-geo, simplifies the geometry (Visvalingam, spherical area) with a tolerance chosen per bin to limit file size, converts each bin to TopoJSON and quantizes coordinates to a 10,000 × 10,000 grid.

Shapes are therefore approximate and unsuitable for measurement. Border uncertainties, as well as differing opinions on the names, territorial changes and durations of polities, are inherent to historical maps; see the Cliopatria README for details. Neither the Seshat Global History Databank nor the Cliopatria authors endorse Chronos.
