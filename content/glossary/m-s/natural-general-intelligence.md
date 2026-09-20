---
title: Natural General Intelligence
aliases: [NGI, nature model]
tags: [glossary, ai, observing-system, earth-system, stewardship, sensor-response, nature-model]
created: 2026-09-18
updated: 2026-09-18
source_project: BioConomy Full
epistemic_status: documented-framework
---

**Natural General Intelligence (NGI)** is a proposed foundation model grounded in the state and dynamics of the planet itself, capable of anticipating how the Earth system will respond to intervention and updating itself from what happens. Its purpose is to serve stewardship of the biosphere, atmosphere, oceans, land, ice, subsurface, and their couplings, by turning half a century of accumulated Earth observations into a general-purpose nature model that can be queried, tested, and improved through further observation.

## Origin

The framework was proposed by Ryan Orbuch of Lowercarbon Capital in September 2026 in the essay *Natural General Intelligence*. Orbuch's argument runs against the assumption that Artificial General Intelligence, once achieved, will resolve civilization's relationship with the natural world by intelligence alone. He argues the opposite: the smarter the machine intelligence becomes, and the more capable of acting on the Earth system, the more dangerous any gap between its model and physical reality becomes. NGI is the empirical feedback loop that would close that gap.

## Design principles

Orbuch specifies five principles for building NGI, summarized here.

Learn directly from Earth observations. Most current AI weather models train on reanalysis products (physics-model reconstructions of past state), which blend measurement and simulation together. NGI would train on the raw observations themselves, preserving what each measurement is worth.

Keep the full resolution of each observation. Any averaging, gridding, or time-windowing before the model sees the data is information lost for good. Architecture choices follow from this constraint.

Obey the physics we know. Conservation laws for energy, mass, and momentum are exact. NGI must respect them even when the training data appears to permit shortcuts.

Discover couplings across the Earth system. Traditional Earth-system models are assembled from modules for atmosphere, ocean, land, ice, and biosphere. Interactions between them are limited to whichever variables researchers specified in advance. NGI would learn couplings latent in the observations themselves, without assuming which system boundaries matter.

Fetch new observations. NGI would reason about which measurements are worth collecting, ranking uncertainty against decision relevance against cost. This requires the observing system itself to become adaptive.

## The observing system

The training data would be drawn from the planetary observing apparatus that governments, academic institutions, and private operators have assembled over the past half century. This includes polar-orbiting and geostationary satellites, ground radar, surface weather stations, radiosondes, aircraft measurements, GPS atmospheric profiling, atmospheric composition networks, altimetry satellites, gravimetry satellites, ocean floats and moorings, river gauges and snow sensors, ice-sheet and sea-ice satellites, ice cores, optical imaging satellites, flux towers, eDNA and bioacoustic sampling, seismic and geodetic networks, and subsurface surveys. The system produces approximately 40 petabytes per year, of which less than one percent is currently consumed by the weather forecasting pipeline that is its main downstream user.

## Role in the corpus

NGI is the technical name for the central nervous system that a mature [[the-bioplace-layer|BioPlace layer]] would resolve into. The current observing apparatus supplies the raw signals. NGI would supply the integrating intelligence above them.

In the [[sensor-response-money|sensor-response money]] architecture, NGI supplies the "data *about* the community and the bioregion" stream that partly backs bioregional currency issuance. The three-tier architecture does not depend on NGI existing before it can operate. Sensor-response money can proceed on the observing system alone, with locally trained models per bioregion, as the [[valley-of-grace|Valley of Grace]] wayfinder work will test. NGI, once built, would substantially strengthen the middle tier's measurement capability by supplying a coherent global model of the state each bioregion holds a slice of.

NGI is silicon intelligence coupled to the carbon substrate of the Earth system. This makes it the working technical instance of the [[carbon-silicon-partnership|Carbon-Silicon Partnership]] and one of the enabling conditions for [[mycelial-coordination|mycelial coordination]] at planetary scale.

## Related entries

[[orbuch]] · [[the-bioplace-layer]] · [[sensor-response-money]] · [[bioregional-financing-facility]] · [[carbon-silicon-partnership]] · [[mycelial-coordination]] · [[valley-of-grace]] · [[three-futures]] · [[substrate-hypothesis]]

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "DefinedTerm",
  "@id": "https://wiki.bioconomy.earth/glossary/natural-general-intelligence/",
  "name": "Natural General Intelligence",
  "description": "A proposed foundation model grounded in the state and dynamics of the planet itself, capable of anticipating how the Earth system will respond to intervention and updating itself from what happens. Purpose: stewardship of the biosphere and its couplings.",
  "termCode": "natural-general-intelligence",
  "alternateName": ["NGI", "nature model"],
  "inDefinedTermSet": {
    "@type": "DefinedTermSet",
    "@id": "https://wiki.bioconomy.earth/glossary/#termset",
    "name": "BioConomy Glossary"
  },
  "url": "https://wiki.bioconomy.earth/glossary/natural-general-intelligence/"
}
</script>
