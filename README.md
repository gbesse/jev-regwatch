# jev-regwatch

**Gate official texts deterministically, relate surviving changes to owned artifacts, and make critical wake-ups impossible to suppress semantically.**

[![Tests](https://github.com/gbesse/jev-regwatch/actions/workflows/test.yml/badge.svg)](https://github.com/gbesse/jev-regwatch/actions/workflows/test.yml) ![MIT](https://img.shields.io/badge/license-MIT-blue) ![Node](https://img.shields.io/badge/node-22%2B-green) ![Public alpha](https://img.shields.io/badge/status-public_alpha-orange)

## 30-second offline quick start
`git clone https://github.com/gbesse/jev-regwatch.git && cd jev-regwatch && npm install && npm run demo`. Inputs and probabilities are synthetic.

## Call real Jev
Set `TYPESAFE_API_KEY` for a reviewed adapter sending paid bounded artifact comparisons to `api.typesafe.ai`. This alpha keeps it unwired; `npm run live-smoke` makes zero calls.

## Library and integration
Use `parseFeed`, `register`, `passes`, `candidates`, `evaluate`, `reconcile`, `writeDigest`, `webhook`, and `measure`. RSS/Atom strings, local artifact stores and injected fetch/provider functions keep orchestration portable.

## How it decides
Jurisdiction, date, source allowlist and content-hash seen gates run before inference. Candidate artifacts share jurisdiction and rank by token overlap. Configured category, source or keyword wake-ups bypass the provider and alert every relevant artifact. Digests are written even empty; reconciliation reports fetched hashes never evaluated; false negatives receive Wilson intervals.

## Boundaries
Directory/URL scheduling, persistent histories, CLI and full fan-out request transport remain unwired in this alpha. The feed parser is intentionally small and skips malformed empty entries. This is a triage aid; people review alerts. The number to watch is missed impact, not alerts avoided. No live benchmark is claimed.

## Validation
Run `npm run check && npm run typecheck && npm test && npm run demo`; CI uses Node 22 and 24.

## Related projects
[DecisionPacks](https://github.com/gbesse/decisionpacks), [IntentBus](https://github.com/gbesse/intentbus), and [jev-timemachine](https://github.com/gbesse/jev-timemachine).

Independent project; not affiliated with TypeSafe AI. [API docs](https://docs.typesafe.ai/api) · [model notes](https://docs.typesafe.ai/model-jaggedness/jev-1.13/)
