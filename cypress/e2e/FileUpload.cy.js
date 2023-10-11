import 'cypress-file-upload'

// For uploading the files we need to put the filed in fixtures folder


describe('File Upload', () => {
    it('Single File Upload', () => {
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile('test1.txt')
        cy.get('#file-submit').click()
        cy.wait(2000)
        cy.get('.example>h3').should('have.text',"File Uploaded!")
        // cy.get('#uploaded-files').should('have.text'," test1.txt ")

    })
    it('File Upload - Rename', () => {
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile({filePath:'test1.txt', fileName:'myFile.txt'})
        cy.get('#file-submit').click()
        cy.wait(2000)
        cy.get('.example>h3').should('have.text',"File Uploaded!")
        cy.get('#uploaded-files').should('have.text','\n    myFile.txt\n  '  )

    })
    it('File Upload - Drag and drop', () => {
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#drag-drop-upload').attachFile('test1.txt',{subjectType:'drag-n-drop'})
        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span').should('have.text','test1.txt')

    })
    it('Multiple File Uploads', () => {
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('#filesToUpload').attachFile(['test1.txt', 'test2.txt']) 
        cy.xpath('//*[@id="fileList"]/li').should('have.length',2)
        cy.get('#fileList > :nth-child(1)').should('have.text','test1.txt')
        cy.get('#fileList > :nth-child(2)').should('have.text','test2.txt')


    })
    it.only('File Upload - Shadow dom', () => {
        cy.visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm')
        cy.get('.smart-browse-input', {includeShadowDom:true}).attachFile('test1.txt')
        cy.get('.smart-item-name', {includeShadowDom:true}).contains('test1.txt')
    })
})