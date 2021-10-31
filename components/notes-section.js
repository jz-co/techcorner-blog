import NoteSectionContainer from "./note-section-container";
import ExpandableSection from "./expandable-section";
import { NoteMarkdown } from "./markdown";
import { Stack } from "@chakra-ui/layout";

export default function NoteSection({ component, content, id, ...props }) {
    if (component == "components.section") {
        return (<NoteSectionContainer spacing={6} id={id}>
            <NoteMarkdown>
                {content}
            </NoteMarkdown>
        </NoteSectionContainer>)
    } else if (component == "components.extended-section") {
        return (
            <NoteSectionContainer id={id}>
                {content.map((subsection) => {
                    if (subsection.type == "plaintext") {
                        return (<NoteMarkdown key={subsection.id}>{subsection.content}</NoteMarkdown>)
                    } else if (subsection.type == "expandable") {
                        return (<ExpandableSection key={subsection.id} title={subsection.title}>
                            <Stack spacing="1em">
                                <NoteMarkdown>{subsection.content}</NoteMarkdown>
                            </Stack>
                        </ExpandableSection>)
                    }
                })}
            </NoteSectionContainer>
        );
    }
}