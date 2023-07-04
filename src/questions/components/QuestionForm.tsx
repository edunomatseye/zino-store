import React, { Suspense } from "react"
import { Form, FormProps } from "src/core/components/Form"
import { LabeledTextField } from "src/core/components/LabeledTextField"

import { z } from "zod"
export { FORM_ERROR } from "src/core/components/Form"

export function QuestionForm<S extends z.ZodType<any, any>>(props: FormProps<S>) {
  return (
    <Form<S> {...props}>
      <LabeledTextField name="text" label="Question: " placeholder="Ask Questions" type="text" />

      <LabeledTextField
        name="choices.0.text"
        label="Choice 1:  "
        placeholder="Add first choice"
        type="text"
      />
      <LabeledTextField
        name="choices.1.text"
        label="Choice 2:  "
        placeholder="Add second choice"
        type="text"
      />
      <LabeledTextField
        name="choices.2.text"
        label="Choice 3:  "
        placeholder="Add third choice"
        type="text"
      />
      {/* template: <__component__ name="__fieldName__" label="__Field_Name__" placeholder="__Field_Name__"  type="__inputType__" /> */}
    </Form>
  )
}
