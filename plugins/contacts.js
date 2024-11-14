const {
  bot,
  importContacts,
  listContacts,
  removeContacts,
  addContacts,
  jidToNum,
  existContacts,
  saveContacts,
} = require('../lib/')

bot(
  {
    pattern: 'contacts ?(.*)',
    desc: 'contact manager',
    type: 'whatsapp',
  },
  async (message, match) => {
    if (match === 'import') {
      if (
        !message.reply_message ||
        !message.reply_message.mimetype ||
        !message.reply_message.mimetype.endsWith('vcard')
      ) {
        return await message.send('Reply to a VCF backup file.')
      }
      const vcfData = await message.reply_message.downloadMediaMessage()
      const contacts = await importContacts(vcfData, message)

      if (contacts.length === 0) {
        return await message.send('No contacts found in the VCF file.')
      }

      let msg = `Total contacts: *${contacts.length}*`
      contacts.forEach((contact, i) => {
        msg += `\n${i + 1}. *${contact.name}* : ${contact.phone}`
      })
      return await message.send(msg)
    }
    if (match === 'list') {
      const contacts = await listContacts(message.id)
      let msg = `Total contacts: *${contacts.length}*\n`
      contacts.forEach((contact, i) => {
        msg += `\n${i + 1}. *${contact.name}* : ${jidToNum(contact.jid)}`
      })
      return await message.send(msg)
    }
    if (match === 'save') {
      const savedContacts = await saveContacts(message.id)
      return await message.send(`saved ${savedContacts.length} contacts`)
    }
    if (match === 'flush') {
      await removeContacts('all', message.id)
      return await message.send('removed all')
    }
    if (match.startsWith('delete')) {
      const contactNumber = match.replace('delete', '').trim()
      const isRemoved = await removeContacts(contactNumber, message.id)
      return await message.send(isRemoved ? 'removed' : `${contactNumber} not exist in contacts`)
    }
    if (match.startsWith('add')) {
      const [contactName, contactNumber] = match.replace('add', '').trim().split(',')
      const isAdded = await addContacts(contactName, contactNumber, message.id)
      return await message.send(isAdded.length ? 'added' : 'failed')
    }
    if (match.startsWith('exist')) {
      const contactNumber = match.replace('exist', '').trim()
      const exist = await existContacts(contactNumber, message.id)
      return await message.send(exist ? 'exist' : 'no exist')
    }
    return await message.send(
      "Example\n- contacts import (import contacts from vcf backup file)\n- contacts flush (remove contacts in db or imported)\n- contacts save (save imported contacts to db)\n- contact list (show contacts in db)\n- contacts delete 9876543210 (remove 9876543210 from contacts)\n- contacts add name,9876543210 (adds name to contacts with number 9876543210)\n- contact exist 9876543210 (check number exist in contacts)\n\n\n> Before saving imported contacts (You have to save contacts after verifying the imported contacts), make sure to not list contacts who are not on WhatsApp. Also, remove those who don't want to send statuses from the VCF file before importing."
    )
  }
)
