# Phase 7 Readiness Check

## Phase 7: Per-post voice rewrite — sub-agent approach (no API key needed)

### Pivot from earlier plan

The original plan called Anthropic's API per post and required `ANTHROPIC_API_KEY`. **Replaced with sub-agent approach** that uses Claude Code's built-in general-purpose agents — they're already-Claude, no key needed, and can run in parallel without bloating the main conversation.

### Architecture

- **Orchestrator** (me, the main Claude Code conversation): spawns 4 parallel sub-agents per batch, waits for all to complete, commits + pushes, ScheduleWakeups +90s for next batch.
- **Each sub-agent**: receives the voice spec + 2–3 voice reference excerpts + a list of 5 post slugs to rewrite. Reads each MDX, preserves frontmatter exactly, writes new ~1,400–1,800 word body in Travis's voice, saves the file. Returns when all 5 are done.

### Batch math

- 207 posts ÷ (4 agents × 5 posts/agent) = ~10–11 batches
- Per-batch wall time: ~3–5 minutes (agents writing quality content takes real time)
- Total: ~50–80 minutes wall time

### Safety

| Constraint | How enforced |
|---|---|
| Frontmatter unchanged | Agent instructions explicitly require gray-matter preserve |
| 53 originals untouched | Agents only receive slugs from `docs/blog-schedule-208.json` |
| Auburn untouched | Auburn slug excluded from work lists |
| Banned phrases | Listed verbatim in agent instructions |
| Voice consistency | Same 5 reference posts excerpted into every agent's prompt |
| Local references | Cities passed per-post in agent instructions |

### How Phase 7 starts

After Phase 6's batch 10 completes and reports done, the next loop iteration will read this doc and:

1. Read the 5 voice reference posts (done — they're at known slugs)
2. Read the publishedDate-sorted list of 207 eligible posts
3. Spawn 4 parallel general-purpose agents, each given 5 posts
4. Wait for all 4 agents to complete
5. Commit batch as `Phase 7 batch X/Y — voice rewrite posts N-M`
6. Push to main
7. ScheduleWakeup +90s with Phase 7 continuation prompt
8. Repeat until all 207 done

### What stays untouched

- `lib/`, `app/`, `components/` — all production code
- All frontmatter on every post
- The 50 Phase 1 originals
- The Auburn post
- Vercel deploy hook + cron schedule
- The Phase 6 v2 templates (those bodies just get replaced)

### Status: READY

No API key needed. Will auto-start as soon as Phase 6's batch 10 wake-up fires and reports done.
